export const dateAgo = (date: Date) => {
    const dateNow = new Date().getTime()
    const dateTodo = new Date(date).getTime()
    const diff = dateNow - dateTodo
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor(diff / (1000 * 60))
    const seconds = Math.floor(diff / (1000))

    if (days > 0) return `${days} days ago`
    if (hours > 0) return `${hours} hours ago`
    if (minutes > 0) return `${minutes} minutes ago`
    if (seconds > 0) return `${seconds} seconds ago`
}