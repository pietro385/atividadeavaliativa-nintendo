import 'bootstrap/dist/css/bootstrap.min.css';

const planos = [
  {
    nome: "Individual",
    preco: "R$ 19,99",
    periodo: "por ano",
    descricao: "Perfeito para um jogador",
    beneficios: [
      "1 conta Nintendo",
      "Jogos clássicos NES e SNES",
      "Partidas online",
      "Save na nuvem",
      "App Nintendo Switch Online",
    ],
    destaque: false,
  },
  {
    nome: "Familiar",
    preco: "R$ 34,99",
    periodo: "por ano",
    descricao: "Compartilhe com até 8 pessoas",
    beneficios: [
      "Até 8 contas Nintendo",
      "Jogos clássicos NES e SNES",
      "Partidas online",
      "Save na nuvem",
      "App Nintendo Switch Online",
    ],
    destaque: true,
  },
];

function PlanosNintendo() {
  return (
    <div
      style={{
        background: "#1a1a2e",
        minHeight: "100vh",
        padding: "48px 16px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 900,
          fontSize: 32,
          marginBottom: 8,
        }}
      >
        Nintendo Switch Online
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.6)",
          marginBottom: 40,
          fontSize: 15,
        }}
      >
        Escolha o plano ideal para você
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        {planos.map((plano) => (
          <div
            key={plano.nome}
            style={{
              background: plano.destaque ? "#e4000f" : "#252540",
              borderRadius: 16,
              padding: "32px 28px",
              width: 280,
              position: "relative",
              border: plano.destaque ? "none" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {plano.destaque && (
              <span
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  color: "#e4000f",
                  fontWeight: 800,
                  fontSize: 11,
                  padding: "4px 16px",
                  borderRadius: 20,
                  letterSpacing: 1,
                  whiteSpace: "nowrap",
                }}
              >
                MAIS POPULAR
              </span>
            )}

            <h2
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 22,
                marginBottom: 4,
              }}
            >
              {plano.nome}
            </h2>
            <p
              style={{
                color: plano.destaque ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
                fontSize: 13,
                marginBottom: 20,
              }}
            >
              {plano.descricao}
            </p>

            <div style={{ marginBottom: 24 }}>
              <span
                style={{ color: "#fff", fontWeight: 900, fontSize: 36 }}
              >
                {plano.preco}
              </span>
              <span
                style={{
                  color: plano.destaque ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  marginLeft: 6,
                }}
              >
                {plano.periodo}
              </span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
              {plano.beneficios.map((b) => (
                <li
                  key={b}
                  style={{
                    color: plano.destaque ? "#fff" : "rgba(255,255,255,0.75)",
                    fontSize: 14,
                    padding: "6px 0",
                    borderBottom: `1px solid ${plano.destaque ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 16 }}>✓</span> {b}
                </li>
              ))}
            </ul>

            <button
              style={{
                width: "100%",
                padding: "12px 0",
                borderRadius: 8,
                border: "none",
                background: plano.destaque ? "#fff" : "#e4000f",
                color: plano.destaque ? "#e4000f" : "#fff",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Assinar agora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanosNintendo;