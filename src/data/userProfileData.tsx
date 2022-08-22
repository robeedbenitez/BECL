interface UserProfileData {
    key: string;
    iconName: string;
    data: string;
}
const userProfileData = [
    { key: '1', iconName: 'hardware-chip-outline', data: '121212121212121' },
    { key: '2', iconName: 'person-circle-outline', data: 'Jose Maria Reyes Reyes' },
    { key: '3', iconName: 'document-text-outline', data: '2121212121212121' },
    { key: '4', iconName: 'mail-outline', data: 'josemariafr@ufps.edu.co' },
    { key: '5', iconName: 'school', data: 'Ingenieria de Sistemas' },
] as UserProfileData[];
export default userProfileData;