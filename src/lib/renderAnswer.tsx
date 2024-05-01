const renderChar = (index: number, answer: string, char:string) => {
    const letter = answer[index];
    const userEnteredLetter = char[index];

    if (userEnteredLetter === undefined) {
        return <span key={index}>{letter}</span>;
    } else if (letter !== userEnteredLetter) {
        return <span key={index} className="text-red-600">{letter}</span>;
    } else if (letter === userEnteredLetter) {
        return <span key={index} className="text-green-600">{letter}</span>;
    }
};

export const renderAnswer = (answer: string, char:string) => {
    return answer.split('').map((_, i) => {
        if (answer[i] === ' ') {
            return <span key={i}>&nbsp;</span>;
        } else {
            return renderChar(i, answer, char);
        }
    });
};