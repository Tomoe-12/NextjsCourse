export async function GET() {
    let posts = [{ id: 1, name: 'khun thi han', body: 'Nextjs is so cool' }];
  
    return new Response(JSON.stringify(posts), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  