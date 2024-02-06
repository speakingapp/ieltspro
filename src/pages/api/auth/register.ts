import type { APIRoute } from "astro";
import { supabase } from "@lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password || !name) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
     options: {
      data: {
        name: name,
        avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
      }
    }
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin");
};