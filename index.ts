import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const main = async () => {
    await prisma.user.create({
        data: {
            email: "venkatsubash@artmail.com",
            id: 3,
            name: "vvs2",
            phoneNumber: 9491234040
        }
    })
    const User = await prisma.user.findUnique({
        where: {
            id: 3        }
    })
    console.log(User);
    
}

main()
