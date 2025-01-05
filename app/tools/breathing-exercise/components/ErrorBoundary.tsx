'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Breathing exercise error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Something went wrong
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {this.state.error?.message || 'An error occurred while loading the breathing exercise.'}
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
} 