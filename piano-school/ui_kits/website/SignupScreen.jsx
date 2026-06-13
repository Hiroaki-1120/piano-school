// おとなりピアノ — Studio signup / listing application form
function SignupScreen({ onDone }) {
  const { Input, Textarea, Select, Checkbox, Button, Badge } = window.PianoSchool_f8945d;
  const data = window.OP_DATA;
  const [feats, setFeats] = React.useState(["体験レッスンあり"]);
  const [agree, setAgree] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const toggle = (v) => setFeats(feats.includes(v) ? feats.filter((x) => x !== v) : [...feats, v]);

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "var(--space-24) var(--space-6)", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: "var(--space-4)" }}>🎉</div>
        <h1 style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-3)" }}>掲載のお申し込みを受け付けました</h1>
        <p style={{ color: "var(--ink-700)", lineHeight: 1.9, marginBottom: "var(--space-8)" }}>
          担当者より2営業日以内にご連絡いたします。<br/>掲載は完全無料です。どうぞよろしくお願いいたします。
        </p>
        <Button size="lg" onClick={onDone}>トップへ戻る</Button>
      </div>
    );
  }

  return (
    <div style={{ background: "linear-gradient(180deg, var(--clay-50), var(--cream) 280px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "var(--space-16) var(--space-6) 0", textAlign: "center" }}>
        <Badge tone="accent">掲載は完全無料</Badge>
        <h1 style={{ fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-2)" }}>あなたの教室を、ご近所に届けよう</h1>
        <p style={{ color: "var(--ink-700)", fontSize: "var(--text-md)", lineHeight: 1.9 }}>
          基本情報を入力するだけ。最短2営業日で掲載できます。
        </p>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "var(--space-10) var(--space-6) 0" }}>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{ background: "var(--ivory)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-xl)", padding: "var(--space-10)", boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            <Input label="教室名" placeholder="例：おとなりピアノ三軒茶屋" required />
            <Input label="お名前（ご担当者）" placeholder="山田 花子" required />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            <Input label="メールアドレス" type="email" placeholder="contact@example.com" required />
            <Input label="電話番号" type="tel" placeholder="03-1234-5678" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            <Select label="エリア" options={[{ value: "", label: "選択してください" }, ...data.areas.map((a) => ({ value: a, label: a }))]} required />
            <Input label="最寄り駅" placeholder="例：三軒茶屋駅 徒歩4分" iconLeft={<span>📍</span>} />
          </div>
          <Input label="月謝（最低額）" placeholder="例：8,000円" hint="代表的なコースの月額を入力してください" />
          <div>
            <div style={{ fontSize: "var(--text-sm)", fontWeight: 700, marginBottom: "var(--space-3)" }}>対応している特徴（複数選択可）</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {data.features.slice(0, 5).map((f) => (
                <Checkbox key={f} label={f} checked={feats.includes(f)} onChange={() => toggle(f)} />
              ))}
            </div>
          </div>
          <Textarea label="教室の紹介文" rows={4} placeholder="教室の雰囲気やこだわり、講師の経歴などをご記入ください。" />
          <div style={{ paddingTop: "var(--space-2)", borderTop: "1px solid var(--hairline)" }}>
            <Checkbox label="利用規約・プライバシーポリシーに同意します" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          </div>
          <Button type="submit" size="lg" block disabled={!agree}>無料で掲載を申し込む</Button>
        </form>
        <div style={{ height: "var(--space-12)" }}></div>
      </div>
    </div>
  );
}
window.SignupScreen = SignupScreen;
