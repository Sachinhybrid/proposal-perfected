import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

export const ProgramSchedule = () => {
  const scheduleItems = [
    {
      time: "9:30 AM – 10:00 AM",
      title: "Ice Breakers & Energy Warm-Up",
      description: "Fun activities to create comfort, break hesitation, and energize the group.",
    },
    {
      time: "10:00 AM – 11:00 AM",
      title: "Leadership Mindset Activity",
      activity: "The Leadership Bridge Challenge",
      learnings: ["Ownership", "Vision", "Strategic Thinking", "Collaboration"],
      highlights: [
        "Planning, communication, resource utilization",
        "Influencing skills vs commanding skills",
        "How leadership decisions affect team success"
      ]
    },
    {
      time: "11:00 AM – 12:15 PM",
      title: "Team Collaboration Challenge",
      activity: "The Marshmallow Tower / Human Web / Puzzle Relay",
      learnings: ["Synergy", "Trust", "Problem Solving", "Role Clarity"],
      highlights: [
        "Teamwork and cross-functional communication",
        "Understanding strengths of others",
        "Handling pressure & deadlines"
      ]
    },
    {
      time: "12:15 PM – 1:00 PM",
      title: "Leadership Reflection Session",
      description: "Short, powerful sharing circle to extract leadership insights.",
    },
    {
      time: "1:00 PM – 2:00 PM",
      title: "Lunch Break",
      description: "",
    },
    {
      time: "2:00 PM – 3:00 PM",
      title: "Decision-Making Simulation",
      activity: "The Wilderness Survival Simulation",
      learnings: ["Decision-Making", "Negotiation", "Emotional Intelligence", "Consensus"],
      description: "Participants must prioritize items for survival and negotiate as a team."
    },
    {
      time: "3:00 PM – 4:00 PM",
      title: "Leadership Under Pressure",
      activity: "Time Pressure Task / Blindfold Navigation Challenge",
      highlights: [
        "How leaders give instructions",
        "Managing stress",
        "Real-time communication clarity",
        "Trust building"
      ]
    },
    {
      time: "4:00 PM – 4:30 PM",
      title: "Leadership Communication Module",
      description: "Short module covering 3Cs of Leadership Communication, How to Influence Without Authority, and Giving Feedback Effectively."
    },
    {
      time: "4:30 PM – 5:00 PM",
      title: "The Final Challenge: Mission Possible",
      description: "Full team mission combining leadership, teamwork, speed & strategy.",
    },
    {
      time: "5:00 PM – 5:30 PM",
      title: "Debrief + Action Plan",
      highlights: [
        "Each participant writes an action-oriented personal leadership plan",
        "Team shares commitments",
        "Closing ceremony with certificates"
      ]
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Program Flow
          </h2>
          <p className="text-muted-foreground">One-Day Schedule (Customizable)</p>
        </div>
        
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-48 flex-shrink-0">
                  <div className="inline-flex px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                    {item.time}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  {item.activity && (
                    <p className="text-sm text-primary font-medium mb-2">
                      Activity: {item.activity}
                    </p>
                  )}
                  
                  {item.description && (
                    <p className="text-muted-foreground mb-3">
                      {item.description}
                    </p>
                  )}
                  
                  {item.highlights && (
                    <ul className="space-y-1 mb-3">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {item.learnings && (
                    <div className="flex flex-wrap gap-2">
                      {item.learnings.map((learning, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {learning}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
