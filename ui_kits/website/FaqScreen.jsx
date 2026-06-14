// おとなりピアノ — FAQ / よくある質問
function FaqScreen({ onSignup, onSearch }) {
  const { Accordion, Button, Badge } = window.PianoSchool_f8945d;
  const userFaq = [
    { q: "体験レッスンは無料ですか？", a: "はい。おとなりピアノに掲載中の教室では、体験レッスンを原則無料で受けられます。お申し込み後、教室から日程のご連絡が届きますので、当日教室へお越しください。" },
    { q: "申し込みから通い始めるまでの流れは？", a: "気になる教室のページから体験レッスンを申し込む → 教室から日程連絡 → 体験レッスン → 入会のお手続き、という流れです。体験後にそのまま入会しなくても問題ありません。" },
    { q: "大人の初心者でも通えますか？", a: "もちろんです。多くの教室が大人の学び直し・初心者の方を歓迎しています。検索の「こだわり条件」で『大人の初心者歓迎』を選ぶと、ぴったりの教室が見つかります。" },
    { q: "月謝以外に費用はかかりますか？", a: "入会金・教材費・発表会費などは教室によって異なります。各教室の詳細ページ「料金・コース」に記載がありますので、お申し込み前にご確認ください。" },
    { q: "オンラインレッスンはありますか？", a: "「オンライン対応」の教室なら、ご自宅から受講できます。通学とオンラインを組み合わせられる教室もあります。" },
    { q: "おとなりピアノの利用は無料ですか？", a: "はい。教室の検索・比較・体験申し込みまで、利用者の方はすべて無料でご利用いただけます。" },
  ];
  const studioFaq = [
    { q: "掲載は無料でできますか？", a: "はい。フリープランなら月額0円で掲載いただけます。上位表示や予約管理などをご希望の場合は有料プランもご用意しています。詳しくは料金ページをご覧ください。" },
    { q: "掲載までどれくらいかかりますか？", a: "お申し込みフォームの送信後、最短2営業日で掲載が完了します。掲載内容は管理画面からいつでも編集できます。" },
    { q: "途中で解約できますか？", a: "はい。有料プランはいつでも解約でき、解約金はかかりません。フリープランへの変更も可能です。" },
  ];
  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, var(--clay-50), var(--cream) 220px)", textAlign: "center" }}>
        <div style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "var(--space-16) var(--space-6) var(--space-8)" }}>
          <Badge tone="accent">サポート</Badge>
          <h1 style={{ fontSize: "var(--text-3xl)", margin: "var(--space-4) 0 var(--space-2)" }}>よくある質問</h1>
          <p style={{ color: "var(--ink-700)", fontSize: "var(--text-md)", lineHeight: 1.9 }}>
            はじめての方からよくいただくご質問をまとめました。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "0 var(--space-6)" }}>
        <h2 style={{ fontSize: "var(--text-xl)", margin: "var(--space-10) 0 var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <span aria-hidden="true">🎹</span>教室をお探しの方へ
        </h2>
        <Accordion items={userFaq} defaultOpen={[0]} />

        <h2 style={{ fontSize: "var(--text-xl)", margin: "var(--space-12) 0 var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <span aria-hidden="true">🏠</span>教室を運営される方へ
        </h2>
        <Accordion items={studioFaq} />

        {/* CTA */}
        <div style={{ margin: "var(--space-16) 0", padding: "var(--space-10)", background: "var(--sage-100)", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
          <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>解決しませんでしたか？</h3>
          <p style={{ color: "var(--ink-700)", marginBottom: "var(--space-6)" }}>まずは気になる教室を探すか、お気軽にお問い合わせください。</p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center" }}>
            <Button onClick={() => onSearch("")}>教室をさがす</Button>
            <Button variant="secondary">お問い合わせ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.FaqScreen = FaqScreen;
