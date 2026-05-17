// app/api/instagram/route.ts
import { NextResponse } from "next/server";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN; // Coloque seu token aqui no .env
const USER_ID = process.env.INSTAGRAM_USER_ID; // ID do usuário Instagram

export async function GET() {
  try {
    const url = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_url,permalink,media_type&access_token=${ACCESS_TOKEN}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ data: data.data });
  } catch (err) {
    return NextResponse.json({ error: "Erro ao buscar posts do Instagram" }, { status: 500 });
  }
}