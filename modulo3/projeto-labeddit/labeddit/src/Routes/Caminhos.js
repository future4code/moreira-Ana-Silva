export const irParaLogin = (navigate) => {
    navigate("/")
}

export const irParaFeed = (navigate) => {
    navigate("/feed")
}

export const irParaCadatro = (navigate) => {
    navigate("/cadastro")
}

export const irParaPost = (navigate, id) => {
    navigate(`/feed/post/${id}`)
}