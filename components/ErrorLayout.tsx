
export const ErrorLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col relative h-screen">
      <div className="flex flex-col h-full flex-grow">
        {children}
      </div>
    </div>
  )
}

export const getErrorLayout = (page: React.ReactElement) => {
  return (
    <ErrorLayout>
      {page}
    </ErrorLayout>
  )
}
