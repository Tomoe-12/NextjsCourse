
export async function Get() {
    let posts = [{ id: 1, title: 'hello', body: 'world' }]

    return Response.json(posts)
}