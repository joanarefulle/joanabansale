export const metadata = {
    title: "Projects | My Site",
};

const projects = [
    { id: 1, name: "Porfollo" },
    { id: 2, name: "Todo app" },
    { id: 3, name: "Weather app" },
];

export default function ProjectsPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Projects</h1>
            <ul>
                {projects.map((p) => (
                    <li key={p.id}>{p.name}</li>
                ))}
            </ul>
        </main>
    );
}
