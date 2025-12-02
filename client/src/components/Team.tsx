import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SiLinkedin, SiX } from "react-icons/si";
import exec1 from "@assets/generated_images/female_executive_headshot.png";
import exec2 from "@assets/generated_images/male_creative_director_headshot.png";
import exec3 from "@assets/generated_images/female_strategist_headshot.png";

// todo: remove mock functionality
const team = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "15+ years leading creative agencies and building award-winning brands.",
    image: exec1,
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for brand storytelling and visual innovation.",
    image: exec2,
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Strategy",
    bio: "Data-driven strategist focused on delivering measurable business results.",
    image: exec3,
    linkedin: "#",
    twitter: "#",
  },
];

export function Team() {
  return (
    <section className="py-20 lg:py-32 bg-background" data-testid="section-team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-subtitle">
            A passionate team of creatives, strategists, and problem solvers dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="text-center border-card-border" data-testid={`card-team-${member.id}`}>
              <CardContent className="pt-8 pb-6">
                <Avatar className="h-32 w-32 mx-auto mb-4 ring-4 ring-primary/10">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl">{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-team-name-${member.id}`}>
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3" data-testid={`text-team-role-${member.id}`}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-team-bio-${member.id}`}>
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-team-linkedin-${member.id}`}
                  >
                    <SiLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-team-twitter-${member.id}`}
                  >
                    <SiX className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
