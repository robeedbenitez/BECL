interface DashboardData {
    key: string;
    title: string;
    icon: string;
}
const dashboard = [
    { key: '1', title: 'Ingreso', icon:"qr-code-outline" },
    { key: '2', title: 'Casillero', icon:"lock-closed-outline" },
    { key: '3', title: 'Salon', icon:"pencil-outline" },
    { key: '4', title: 'Auditorio', icon:"videocam-outline" },
    { key: '5', title: 'Catalogo', icon:"library-outline" },
    { key: '6', title: 'Sala Computo', icon:"desktop-outline" },
    { key: '7', title: 'Capacitaciones', icon:"book-outline" },
] as DashboardData[];
export default dashboard;