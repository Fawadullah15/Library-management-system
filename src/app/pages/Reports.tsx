import { Navigation } from "../components/Navigation";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const monthlyBorrowingData = [
  { month: "Oct", borrowed: 45, returned: 42 },
  { month: "Nov", borrowed: 52, returned: 48 },
  { month: "Dec", borrowed: 38, returned: 41 },
  { month: "Jan", borrowed: 65, returned: 58 },
  { month: "Feb", borrowed: 71, returned: 68 },
  { month: "Mar", borrowed: 58, returned: 62 },
];

const categoryData = [
  { category: "Algorithms", count: 45 },
  { category: "Software Eng", count: 38 },
  { category: "AI & ML", count: 32 },
  { category: "Databases", count: 28 },
  { category: "Networks", count: 24 },
  { category: "Security", count: 19 },
];

const topBorrowedBooks = [
  { title: "Introduction to Algorithms", borrows: 24 },
  { title: "Clean Code", borrows: 21 },
  { title: "Design Patterns", borrows: 18 },
  { title: "The Pragmatic Programmer", borrows: 16 },
  { title: "Artificial Intelligence", borrows: 14 },
];

export function Reports() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <h1
            className="mb-4"
            style={{
              fontSize: '3.5rem',
              color: 'var(--midnight-blue)',
              fontWeight: 500,
            }}
          >
            Reports & Analytics
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--soft-grey)',
              fontWeight: 300,
            }}
          >
            Library statistics and trends
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-16">
          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Total Books
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              500
            </p>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Currently Borrowed
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              54
            </p>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Active Members
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              342
            </p>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Overdue Books
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--destructive)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              12
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          <div
            className="p-10 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <h2
              className="mb-8"
              style={{
                fontSize: '1.5rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Monthly Borrowing Activity
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyBorrowingData} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(26, 35, 50, 0.08)" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="var(--soft-grey)"
                  style={{ fontSize: '0.85rem', fontWeight: 300 }}
                  axisLine={{ stroke: 'rgba(26, 35, 50, 0.1)' }}
                  tickLine={false}
                />
                <YAxis
                  stroke="var(--soft-grey)"
                  style={{ fontSize: '0.85rem', fontWeight: 300 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--ivory)',
                    border: '1px solid rgba(26, 35, 50, 0.1)',
                    borderRadius: '2px',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="borrowed"
                  stroke="var(--midnight-blue)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--midnight-blue)', r: 4 }}
                  name="Borrowed"
                />
                <Line
                  type="monotone"
                  dataKey="returned"
                  stroke="var(--muted-gold)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--muted-gold)', r: 4 }}
                  name="Returned"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div
            className="p-10 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <h2
              className="mb-8"
              style={{
                fontSize: '1.5rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Books by Category
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData} margin={{ top: 20, right: 20, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(26, 35, 50, 0.08)" vertical={false} />
                <XAxis
                  dataKey="category"
                  stroke="var(--soft-grey)"
                  style={{ fontSize: '0.75rem', fontWeight: 300 }}
                  axisLine={{ stroke: 'rgba(26, 35, 50, 0.1)' }}
                  tickLine={false}
                  angle={-15}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  stroke="var(--soft-grey)"
                  style={{ fontSize: '0.85rem', fontWeight: 300 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--ivory)',
                    border: '1px solid rgba(26, 35, 50, 0.1)',
                    borderRadius: '2px',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                  }}
                />
                <Bar dataKey="count" fill="var(--midnight-blue)" radius={[2, 2, 0, 0]} name="Books" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="p-10 rounded-sm"
          style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
        >
          <h2
            className="mb-8"
            style={{
              fontSize: '1.5rem',
              color: 'var(--midnight-blue)',
              fontWeight: 500,
            }}
          >
            Most Borrowed Books
          </h2>

          <div className="space-y-1">
            {topBorrowedBooks.map((book, index) => (
              <div
                key={book.title}
                className="flex items-center gap-6 py-5 px-6"
                style={{ borderBottom: index < topBorrowedBooks.length - 1 ? '1px solid rgba(26, 35, 50, 0.06)' : 'none' }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '2px',
                    backgroundColor: index === 0 ? 'var(--muted-gold)' : 'rgba(26, 35, 50, 0.05)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.2rem',
                      color: index === 0 ? 'var(--ivory)' : 'var(--midnight-blue)',
                      fontWeight: 500,
                      fontFamily: 'Playfair Display, Georgia, serif',
                    }}
                  >
                    {index + 1}
                  </span>
                </div>

                <div className="flex-1">
                  <p
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--midnight-blue)',
                      fontWeight: 300,
                    }}
                  >
                    {book.title}
                  </p>
                </div>

                <div
                  className="flex items-center gap-3"
                >
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--soft-grey)',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {book.borrows} borrows
                  </span>
                  <div
                    style={{
                      width: `${(book.borrows / 24) * 200}px`,
                      height: '6px',
                      backgroundColor: 'var(--midnight-blue)',
                      borderRadius: '1px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
