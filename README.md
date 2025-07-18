# 📈 KiteMCP – Zerodha Trading via MCP

**KiteMCP** is a command-based Zerodha trading system built using the [KiteConnect API](https://github.com/zerodha/kiteconnectjs), [Bun](https://bun.sh), and the [Model Context Protocol (MCP)](https://modelcontextprotocol.dev). It allows real-time stock buy/sell operations through MCP command calls from a local server, currently integrated with Claude or any compatible tool interface.

---

## 🚀 Features

- 🔄 Buy and sell stocks programmatically via commands
- 🛠 Modular MCP tool structure (`buy-stock`, `sell-stock`)
- 🔐 Secure API key handling via `.env`
- ✅ Schema validation using [Zod](https://zod.dev)
- ⚙️ Fast runtime with Bun and TypeScript
- 🧪 Local test environment with log outputs

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/zerodha-trade
cd zerodha-trade
```

### 2. Install Dependencies (using Bun)

```bash
bun install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
KITE_API_KEY=your_api_key
KITE_API_SECRET=your_api_secret
ACCESS_TOKEN=your_access_token
```

### 4. Start the MCP Server

```bash
bun index.ts
```

---

### 📸 Screenshots

![MCP Command Demo](./assets/claudeAI.png)

## 📥 Example Command Usage

Send the following JSON to the server via terminal or Claude:

```json
{
  "id": "1",
  "action": "call_tool",
  "tool": "buy-stock",
  "arguments": {
    "symbol": "RELIANCE",
    "exchange": "NSE",
    "quantity": 10,
    "price": 2800
  }
}
```

---

## ✅ Input Validation

All tool inputs are validated using **Zod** for:

- Required fields: `symbol`, `exchange`, `quantity`
- Type and range checks
- Custom error messages on invalid input

---

## 🧪 Example Output

```json
{
  "status": "success",
  "message": "Buy order placed for RELIANCE at ₹2800"
}
```

---

## 🛡️ Security Notes

- Do **not** expose your `.env` file in production
- Add rate limiting and request authentication if going public
- Store order logs securely

---

## 📌 Future Enhancements

- 🌐 Deploy on cloud with webhook interface
- 📊 Add portfolio view and PnL tracking
- 🔔 Telegram/email alerts for order confirmations
- 🧠 Auto-trading with strategy modules

---

## 👨‍💻 Author

**Utkarsh Agarwal**  
[GitHub](https://github.com/utkarshagar2121) • [LinkedIn](https://linkedin.com/in/utkarsh-agarwal-1b359922b)

---

## 📜 License

MIT License © 2025 Utkarsh Agarwal
