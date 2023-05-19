export const whichBirthdayIsClose = (userData) => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 366);

  const upcomingBirthdays = userData
    .filter((user) => {
      const birthday = new Date(user.birthday);
      const birthdayThisYear = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
      );
      const timeDiff = Math.abs(birthdayThisYear.getTime() - today.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return daysDiff <= 366 && daysDiff >= 0;
    })
    .map((user) => {
      const birthday = new Date(user.birthday);
      const birthdayThisYear = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
      );
      const timeDiff = birthdayThisYear.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const options = { day: "numeric", month: "long", year: "numeric" };
      const formattedBirthday = birthday.toLocaleDateString("es-ES", options);

      return {
        birthday: formattedBirthday,
        daysLeft: daysDiff,
        displayName: user.displayName,
        lastName: user.lastName,
        photoUrl: user.photoUrl,
        uid: user.uid,
        username: user.username,
      };
    })
    .sort((a, b) => {
      const dateA = a.daysLeft;
      const dateB = b.daysLeft;
      return dateA - dateB;
    });

  return upcomingBirthdays;
};
