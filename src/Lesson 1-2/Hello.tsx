/// Props = parameters passed to a component.
/// In TypeScript, we define the shape of props with a type.

type HelloProps = {
    name: string;
};

/// <summary>
/// A simple React component that displays a greeting message.
/// </summary>
/// <param name="name">The name to greet.</param>
export function Hello({ name }: HelloProps) {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>This is a simple React component.</p>
        </div>
    );
}