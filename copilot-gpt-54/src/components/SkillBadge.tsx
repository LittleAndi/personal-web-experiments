type SkillBadgeProps = {
  skill: string;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex min-h-10 items-center rounded-full border border-line bg-canvas px-4 py-2 text-sm text-muted">
      {skill}
    </span>
  );
}

export default SkillBadge;
