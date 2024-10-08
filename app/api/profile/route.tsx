
export async function Get() {
    let posts = [{ id: 1, name: 'khun thi han', body: 'Nextjs is so cool' }]

    return Response.json(posts)
}