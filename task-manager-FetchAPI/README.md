// Example: Performing a PATCH request to toggle task completion
export async function updateTask(id, updates) {
  const response = await fetch(`[https://jsonplaceholder.typicode.com/todos/$](https://jsonplaceholder.typicode.com/todos/$){id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(updates),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
}