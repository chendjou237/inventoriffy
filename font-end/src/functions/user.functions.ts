
export default async function getTest() {
    try {
        const response = await fetch('http://localhost:8081/api/user', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

    })

    return  await response.json()
    } catch (error) {
        throw error
    }
 }
 
export const postUser = async (name: string, email: string, password: string) => {

    try {
        const response = await fetch('http://localhost:8081/api/user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        return  response
    } catch (error) {
        throw error
    }
    }