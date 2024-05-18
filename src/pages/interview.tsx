import Message from "../components/ui/message";

export default function Interview() {
    const fullQuestion = 'This is message from interviewer';

    return (
        <div className="p-4">
            <Message text={fullQuestion} />
        </div>
    );
}
