export const getApplication = async (id: number | string) => {
  try {
    const response = await fetch(`/api/applications/${id}`)

    if (!response.ok) {
      throw new Error(response.statusText || 'Error fetching application')
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
