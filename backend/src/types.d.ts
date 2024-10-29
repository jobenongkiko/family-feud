declare global {
  interface DatabaseConfig {
    dbName: string;
    user: string;
    password: string;
    host: string;
    port: number;
    debug: boolean;
  }
}

export {};