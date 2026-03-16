export default function Home() {
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 20px 32px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: 999,
            background: "#e2e8f0",
            fontSize: 14,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          수원 지역특화 · 내신전문 · 프리미엄 관리
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 64px)",
            lineHeight: 1.15,
            fontWeight: 900,
            margin: 0,
          }}
        >
          알고리즘 입시연구소
          <br />
          수원형 내신 전문 플랫폼
        </h1>

        <p
          style={{
            marginTop: 20,
            fontSize: 18,
            lineHeight: 1.8,
            maxWidth: 760,
            color: "#334155",
          }}
        >
          정자동, 천천동, 장안구 중심으로
          학생 맞춤 매칭과 프리미엄 내신 관리 서비스를 제공합니다.
          개인수업, 그룹수업, 학교별 시험대비, 학부모 피드백까지 한 번에 연결합니다.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <a
            href="#consult"
            style={{
              background: "#0f172a",
              color: "white",
              padding: "14px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            무료 상담 신청
          </a>
          <a
            href="#program"
            style={{
              background: "white",
              color: "#0f172a",
              padding: "14px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid #cbd5e1",
            }}
          >
            프로그램 보기
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 20px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {[
          ["지역 맞춤 내신", "수원 지역 학교별 시험 스타일에 맞춘 대비"],
          ["학생-선생님 매칭", "개인수업과 그룹수업을 성향에 맞게 연결"],
          ["프리미엄 관리", "오답, 과제, 성적 추적, 학부모 피드백 제공"],
          ["고1·고2 집중", "실제 수요가 높은 학년 중심으로 빠르게 운영"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              background: "white",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22 }}>{title}</h3>
            <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.7 }}>{desc}</p>
          </div>
        ))}
      </section>

      <section
        id="program"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px 64px",
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>프로그램</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "개인수업",
              price: "월 48만원~",
              desc: "학생 수준과 목표 학교에 맞춘 1:1 내신 집중 코칭",
            },
            {
              title: "그룹수업",
              price: "월 24만원~",
              desc: "친구들과 함께하는 효율적인 학교별 내신 대비반",
            },
            {
              title: "프리미엄 관리",
              price: "월 59만원~",
              desc: "과제관리, 오답관리, 학부모 리포트까지 포함한 집중 프로그램",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 24,
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800 }}>{item.title}</div>
              <div style={{ fontSize: 28, fontWeight: 900, marginTop: 10 }}>{item.price}</div>
              <p style={{ color: "#475569", lineHeight: 1.7, marginTop: 12 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="consult"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            color: "white",
            borderRadius: 28,
            padding: 28,
          }}
        >
          <h2 style={{ fontSize: 32, marginTop: 0 }}>무료 상담 신청</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
            지금은 상담 기능 연결 전 단계라서 먼저 화면만 올립니다.
            다음 단계에서 이름, 연락처, 학교, 학년을 입력하면 저장되게 붙일 거예요.
          </p>
          <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <input placeholder="학부모 성함" style={inputStyle} />
            <input placeholder="학생 학교 / 학년" style={inputStyle} />
            <input placeholder="연락처" style={inputStyle} />
            <button
              style={{
                background: "#f8fafc",
                color: "#0f172a",
                border: "none",
                borderRadius: 14,
                padding: "14px 18px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              상담 신청하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid #334155",
  background: "#111827",
  color: "white",
  outline: "none",
};
