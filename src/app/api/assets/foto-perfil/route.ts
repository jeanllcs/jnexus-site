import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET(): Promise<NextResponse> {
  try {
    const imagePath = path.join(process.cwd(), "Assets", "foto_perfil.jpg");
    const fileBuffer = await fs.readFile(imagePath);

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new NextResponse("Imagem não encontrada em Assets/foto_perfil.jpg", {
      status: 404,
    });
  }
}
