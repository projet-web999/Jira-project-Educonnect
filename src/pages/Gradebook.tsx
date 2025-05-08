import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, List } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudentGrade {
  id: string;
  name: string;
  grades: {
    [subject: string]: {
      score: number;
      maxScore: number;
      comment?: string;
      lastUpdated: string;
    };
  };
}

interface Subject {
  id: string;
  name: string;
}

const subjects: Subject[] = [
  { id: "math", name: "Mathematics" },
  { id: "science", name: "Science" },
  { id: "literature", name: "Literature" },
  { id: "history", name: "History" },
  { id: "art", name: "Art" },
];

const initialStudents: StudentGrade[] = [
  {
    id: "1",
    name: "Yassin Sassi",
    grades: {
      math: { score: 85, maxScore: 100, lastUpdated: "2025-05-02" },
      science: { score: 92, maxScore: 100, lastUpdated: "2025-05-01" },
      literature: { score: 78, maxScore: 100, lastUpdated: "2025-04-30" },
      history: { score: 88, maxScore: 100, lastUpdated: "2025-04-29" },
      art: { score: 95, maxScore: 100, lastUpdated: "2025-04-28" },
    },
  },
  {
    id: "2",
    name: "Bziwech",
    grades: {
      math: { score: 72, maxScore: 100, lastUpdated: "2025-05-02" },
      science: { score: 85, maxScore: 100, lastUpdated: "2025-05-01" },
      literature: { score: 90, maxScore: 100, lastUpdated: "2025-04-30" },
      history: { score: 76, maxScore: 100, lastUpdated: "2025-04-29" },
      art: { score: 88, maxScore: 100, lastUpdated: "2025-04-28" },
    },
  },
  {
    id: "3",
    name: "Adem Lasmer",
    grades: {
      math: { score: 95, maxScore: 100, lastUpdated: "2025-05-02" },
      science: { score: 91, maxScore: 100, lastUpdated: "2025-05-01" },
      literature: { score: 85, maxScore: 100, lastUpdated: "2025-04-30" },
      history: { score: 79, maxScore: 100, lastUpdated: "2025-04-29" },
      art: { score: 83, maxScore: 100, lastUpdated: "2025-04-28" },
    },
  },
  {
    id: "4",
    name: "Ahmed Kochtben",
    grades: {
      math: { score: 67, maxScore: 100, lastUpdated: "2025-05-02" },
      science: { score: 75, maxScore: 100, lastUpdated: "2025-05-01" },
      literature: { score: 82, maxScore: 100, lastUpdated: "2025-04-30" },
      history: { score: 88, maxScore: 100, lastUpdated: "2025-04-29" },
      art: { score: 91, maxScore: 100, lastUpdated: "2025-04-28" },
    },
  },
];

const Gradebook = () => {
  const { toast } = useToast();
  const [students, setStudents] = useState<StudentGrade[]>(initialStudents);
  const [selectedSubject, setSelectedSubject] = useState<string>("math");
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [editedScore, setEditedScore] = useState<string>("");
  const [editedComment, setEditedComment] = useState<string>("");

  const getGradeColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800";
    if (score >= 80) return "bg-blue-100 text-blue-800";
    if (score >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const handleEditGrade = (studentId: string) => {
    setEditingStudentId(studentId);
    const student = students.find((s) => s.id === studentId);
    if (student) {
      setEditedScore(student.grades[selectedSubject].score.toString());
      setEditedComment(student.grades[selectedSubject].comment || "");
    }
  };

  const handleSaveGrade = (studentId: string) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        const updatedGrades = {
          ...student.grades,
          [selectedSubject]: {
            ...student.grades[selectedSubject],
            score: Number(editedScore),
            comment: editedComment,
            lastUpdated: new Date().toISOString().split("T")[0],
          },
        };
        return { ...student, grades: updatedGrades };
      }
      return student;
    });

    setStudents(updatedStudents);
    setEditingStudentId(null);
    
    toast({
      title: "Grade updated",
      description: "Student grade has been successfully updated.",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Student Gradebook</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <List className="h-5 w-5" /> 
            Class Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Current Students: {students.length}</h2>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Student Name</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                  <TableHead className="hidden md:table-cell">Comment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                      {editingStudentId === student.id ? (
                        <Input
                          type="number"
                          min="0"
                          max={student.grades[selectedSubject].maxScore}
                          value={editedScore}
                          onChange={(e) => setEditedScore(e.target.value)}
                          className="w-16 inline-block"
                        />
                      ) : (
                        <Badge className={getGradeColor(student.grades[selectedSubject].score)}>
                          {student.grades[selectedSubject].score} / {student.grades[selectedSubject].maxScore}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {student.grades[selectedSubject].lastUpdated}
                    </TableCell>
                    <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                      {editingStudentId === student.id ? (
                        <Input
                          value={editedComment}
                          onChange={(e) => setEditedComment(e.target.value)}
                          placeholder="Add comment"
                        />
                      ) : (
                        student.grades[selectedSubject].comment || "-"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {editingStudentId === student.id ? (
                        <Button
                          size="sm"
                          onClick={() => handleSaveGrade(student.id)}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditGrade(student.id)}
                        >
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      
    </div>
  );
};

export default Gradebook;
