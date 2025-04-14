import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes could be added here if needed for future functionality
  // such as storing user comments, newsletter signups, etc.
  
  // Example API endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", message: "Nambi Narayanan Tribute Site API is running" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
