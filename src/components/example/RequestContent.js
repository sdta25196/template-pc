function RequestContent({ content }) {
  return (
    <div>
      {JSON.stringify(content, null, 4)}
    </div>
  )
}

export default RequestContent