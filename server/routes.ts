import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again." 
        });
      }
    }
  });

  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch submissions" });
    }
  });

  return httpServer;
}
