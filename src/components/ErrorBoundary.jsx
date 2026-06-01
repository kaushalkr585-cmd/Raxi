import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Raxi render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6 text-center text-white">
          <div className="max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-2xl font-semibold">Something failed to render.</p>
            <p className="mt-3 text-zinc-400">Refresh the page once. If it continues, the app will show this instead of a blank screen.</p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
