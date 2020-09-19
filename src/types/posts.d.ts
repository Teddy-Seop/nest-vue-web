declare namespace Posts {
    interface IPost {
        id: number,
        title: string,
        contents: string,
        user: User.IUser,
        createdAt: Date,
    }
}