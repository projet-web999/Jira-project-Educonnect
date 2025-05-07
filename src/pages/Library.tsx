
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Search } from "lucide-react";

const Library = () => {
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      status: "Available",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: null,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Science Fiction",
      status: "Checked Out",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: "May 30, 2025",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      status: "Available",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: null,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      status: "Available",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: null,
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      status: "Reserved",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: null,
    },
    {
      id: 6,
      title: "Moby Dick",
      author: "Herman Melville",
      category: "Adventure",
      status: "Available",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: null,
    }
  ];
  
  const checkedOutBooks = [
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Coming-of-age Fiction",
      status: "Checked Out",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: "May 15, 2025",
    },
    {
      id: 8,
      title: "Lord of the Flies",
      author: "William Golding",
      category: "Allegory",
      status: "Checked Out",
      coverImage: "https://placehold.co/80x120/e2e8f0/1e293b?text=Book Cover",
      dueDate: "May 20, 2025",
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Library</h1>
        <p className="text-muted-foreground mt-2">
          Browse and check out books from the school library
        </p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search for books by title, author, or category" 
        />
      </div>
      
      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full sm:w-auto grid-cols-2">
          <TabsTrigger value="browse">Browse Books</TabsTrigger>
          <TabsTrigger value="checked-out">Checked Out</TabsTrigger>
        </TabsList>
        
        <TabsContent value="browse" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="checked-out" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {checkedOutBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    category: string;
    status: string;
    coverImage: string;
    dueDate: string | null;
  };
}

const BookCard = ({ book }: BookCardProps) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Checked Out":
        return "bg-red-100 text-red-800 border-red-200";
      case "Reserved":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge variant="outline" className={getStatusColor(book.status)}>
            {book.status}
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
            {book.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img src={book.coverImage} alt={`${book.title} cover`} className="w-20 h-30 object-cover rounded" />
          </div>
          <div>
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            {book.dueDate && (
              <div className="flex items-center mt-2 text-sm text-amber-600">
                <Clock className="h-3 w-3 mr-1" />
                <span>Due: {book.dueDate}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          size="sm" 
          className="w-full"
          variant={book.status === "Available" ? "default" : "outline"}
          disabled={book.status !== "Available"}
        >
          {book.status === "Available" ? (
            <>
              <BookOpen className="h-4 w-4 mr-2" />
              Check Out
            </>
          ) : book.status === "Checked Out" ? (
            "Return Book"
          ) : (
            "Reserve"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Library;
