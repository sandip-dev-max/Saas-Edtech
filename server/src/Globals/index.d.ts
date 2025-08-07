
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      User?: {
        name: string;
        age: number;
      };
    }
  }
}
