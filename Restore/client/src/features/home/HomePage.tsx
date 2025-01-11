import agent from "../../api/agent";

export default function HomePage() {
  return (
    <div className="container d-flex justify-content-center gap-2 mt-5">
      <button className="btn btn-primary" onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 Error</button>
      <button className="btn btn-primary" onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 Error</button>
      <button className="btn btn-primary" onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 Error</button>
      <button className="btn btn-primary" onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</button>
      <button className="btn btn-primary" onClick={() => agent.TestErrors.getValidationError().catch(error => console.log(error))}>Test Validation Error</button>
    </div>
  )
}
