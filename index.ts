import { placingOrder } from "./trade";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { z } from "zod"; // for input validation

// Create an MCP server
const server = new McpServer({
  name: "DEMO",
  version: "1.0.0",
});

// Add an addition tool
server.registerTool(
  "add-numbers",
  {
    title: "Addition Tool",
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() },
  },
  async ({ a, b }) => {
    // console.log("Running add-numbers with:", a, b);
    return {
      content: [{ type: "text", text: String(a + b) }],
    };
  }
);
server.registerTool(
  "factorial-number",
  {
    title: "Factorial Tool",
    description: "Calculate the factorial of a number",
    inputSchema: { a: z.number() },
  },
  async ({ a }) => {
    let ans = 1;
    for (let i = 2; i <= a; i++) {
      ans *= i;
    }
    return {
      content: [{ type: "text", text: String(ans) }],
    };
  }
);

server.registerTool(
  "buy-stock",
  {
    title: "BUY the stock",
    description:
      "Buy the stock using Zerodha. It executes the real order immediately.It expects the stock name and quantity",
    inputSchema: { stock: z.string(), quantity: z.number() },
  },
  async ({ stock, quantity }) => {
    await placingOrder("BUY", stock, quantity);
    return {
      content: [{ type: "text", text: "Order for buy placed successfully" }],
    };
  }
);
server.registerTool(
  "sell-stock",
  {
    title: "SELL the stock",
    description:
      "Sell the stock using Zerodha. It executes the real order immediately. It expects the stock name and quantity",
    inputSchema: { stock: z.string(), quantity: z.number() },
  },
  async ({ stock, quantity }) => {
    await placingOrder("SELL", stock, quantity);
    return {
      content: [{ type: "text", text: "Order for sell placed successfully" }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
