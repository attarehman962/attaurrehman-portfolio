import Section from '../layout/Section';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';

const widgets = [
  {
    title: 'GitHub stats',
    src: 'https://github-readme-stats.vercel.app/api?username=attarehman962&show_icons=false&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=a3a3a3&icon_color=ffffff&ring_color=ffffff'
  },
  {
    title: 'Top languages',
    src: 'https://github-readme-stats.vercel.app/api/top-langs/?username=attarehman962&layout=compact&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=a3a3a3'
  },
  {
    title: 'Contribution streak',
    src: 'https://streak-stats.demolab.com?user=attarehman962&hide_border=true&background=00000000&ring=ffffff&fire=ffffff&currStreakLabel=a3a3a3&sideLabels=a3a3a3&currStreakNum=ffffff&sideNums=ffffff&dates=737373'
  },
  {
    title: 'Activity graph',
    src: 'https://github-readme-activity-graph.vercel.app/graph?username=attarehman962&bg_color=000000&color=a3a3a3&line=ffffff&point=ffffff&area=false&hide_border=true'
  }
];

function GitHubStats() {
  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="Open-source activity and technical footprint."
      description="Live GitHub widgets reinforce consistency, language distribution, contribution history, and public project visibility for recruiter review."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {widgets.map((widget, index) => (
          <Reveal key={widget.title} delay={index * 0.08}>
            <Card className="p-4 sm:p-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-muted">
                {widget.title}
              </p>
              <img
                src={widget.src}
                alt={widget.title}
                loading="lazy"
                className="github-widget w-full rounded-2xl border border-border bg-black/40"
              />
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default GitHubStats;
