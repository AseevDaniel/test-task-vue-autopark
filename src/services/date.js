export const getDatesDifference = (date) => {
  const formattedDate = date.split('.').reverse().join('-')
  const postDate = new Date(formattedDate)
  const todayDate = new Date()

  const differenceInMs = todayDate - postDate
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24))

  return { differenceInMs, differenceInDays }
}
