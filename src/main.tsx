import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Disciplinas } from './routes/Disciplinas/Disciplinas.tsx'
import { AdicionarDisciplina } from './components/disciplina/AdicionarDisciplina/AdicionarDisciplina.tsx'
import { EditarDisciplina } from './components/disciplina/EditarDisciplina/EditarDisciplina.tsx'

const queryClient = new QueryClient();

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Disciplinas />
      },
      {
        path: "/adicionar-disciplina",
        element: <AdicionarDisciplina />
      },
      {
        path: "/editar-disciplina",
        element: <EditarDisciplina />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
