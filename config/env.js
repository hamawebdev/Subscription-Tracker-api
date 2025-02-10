import { config } from "dotenv";


config({ path: `.env.${process.env.NODE_ENV || ""}` });

export const PORT = process.PORT || 3000;



 