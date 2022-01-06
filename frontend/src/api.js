export const postRequest = async (url, body) => {
    const res = await fetch("/api" + url, {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    });
    if (res.status !== 200) {
        return Promise.reject("Wystąpił błąd");
    }
    return await res.json();
}

export const getRequest = async (url) => {
    const res = await fetch("/api" + url, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    });
    if (res.status !== 200) {
        return Promise.reject("Wystąpił błąd");
    }
    return await res.json();
}