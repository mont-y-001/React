import { useMemo, useState } from "react";

const words = ["hii", "my", "name", "is", "Mohit", "yadav", "heyyyy"];

const Total_Lines = 1000;
const AllWords = [];

for (let i = 0; i < Total_Lines; i++) {
    let sentence = "";

    for (let j = 0; j < words.length; j++) {
        sentence += words[Math.floor(Math.random() * words.length)] + " ";
    }

    AllWords.push(sentence);
}

export function Assignment2() {

    const [filter, setFilter] = useState("");

  const filteredSentence = useMemo(() => {
    return AllWords.filter(sentence =>
        sentence.toLowerCase().includes(filter.toLowerCase())
    );
}, [filter]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setFilter(e.target.value)}
            />

            {filteredSentence.map((word, index) => (
                <div key={index}>
                    {word}
                </div>
            ))}
        </div>
    );
}