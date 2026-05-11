import Section from '../layout/Section';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { focusObject, profile } from '../../data/profile';

function Focus() {
  const entries = Object.entries(focusObject);

  return (
    <Section
      id="focus"
      eyebrow="Current Focus"
      title="What Atta is sharpening right now."
      description="This section keeps the brand practical: better APIs, stronger security flows, cleaner database work, and reusable frontend systems."
    >
      <Reveal>
        <Card className="overflow-hidden p-0">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                current_focus.js
              </p>
              <p className="text-xs text-muted">{profile.role}</p>
            </div>
          </div>

          <div className="overflow-x-auto p-6 sm:p-8">
            <pre className="font-mono text-sm leading-8 text-secondary">
              <code>
                {'const currentlyFocusedOn = {\n'}
                {entries.map(
                  ([key, value], index) =>
                    `  "${key}": "${value}"${index < entries.length - 1 ? ',' : ''}\n`
                )}
                {'};'}
              </code>
            </pre>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

export default Focus;
