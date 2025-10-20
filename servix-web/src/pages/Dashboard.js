import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const { usuario, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <h2>🚀 Servix</h2>
          </div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <i className='bx bx-menu'></i>
          </button>
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            <i className='bx bx-user'></i>
          </div>
          <div className="user-info">
            <h4>{usuario?.email || 'Usuário'}</h4>
            <span className="status">Online</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3>MENU</h3>
            <ul>
              <li className="active">
                <i className='bx bx-home'></i>
                <span>Dashboard</span>
                <div className="active-indicator"></div>
              </li>
              <li>
                <i className='bx bx-calendar'></i>
                <span>Agendamentos</span>
              </li>
              <li>
                <i className='bx bx-envelope'></i>
                <span>Mensagens</span>
              </li>
              <li>
                <i className='bx bx-cog'></i>
                <span>Configurações</span>
              </li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>SERVIÇOS</h3>
            <ul>
              <li>
                <i className='bx bx-plus'></i>
                <span>Novo Serviço</span>
              </li>
              <li>
                <i className='bx bx-list-ul'></i>
                <span>Meus Serviços</span>
              </li>
              <li>
                <i className='bx bx-star'></i>
                <span>Avaliações</span>
              </li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>RELATÓRIOS</h3>
            <ul>
              <li>
                <i className='bx bx-bar-chart'></i>
                <span>Vendas</span>
              </li>
              <li>
                <i className='bx bx-trending-up'></i>
                <span>Performance</span>
              </li>
              <li>
                <i className='bx bx-download'></i>
                <span>Exportar</span>
              </li>
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={logout}>
            <i className='bx bx-log-out'></i>
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <i className='bx bx-menu'></i>
            </button>
            <div className="breadcrumb">
              <span>Dashboard</span>
              <i className='bx bx-chevron-right'></i>
              <span>Visão Geral</span>
            </div>
          </div>

          <div className="header-center">
            <div className="search-bar">
              <i className='bx bx-search'></i>
              <input type="text" placeholder="Buscar..." />
            </div>
          </div>

          <div className="header-right">
            <button className="notification-btn">
              <i className='bx bx-bell'></i>
              <span className="notification-badge">3</span>
            </button>
            <button className="settings-btn">
              <i className='bx bx-cog'></i>
            </button>
            <div className="user-menu">
              <div className="user-avatar-small">
                <i className='bx bx-user'></i>
              </div>
              <span>{usuario?.email?.split('@')[0] || 'Usuário'}</span>
              <i className='bx bx-chevron-down'></i>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="page-header">
            <h1>Dashboard</h1>
            <p>Bem-vindo de volta! Aqui está um resumo das suas atividades.</p>
          </div>

          {/* KPI Cards */}
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon earnings">
                <i className='bx bx-dollar-circle'></i>
              </div>
              <div className="kpi-content">
                <h3>R$ 1.452</h3>
                <p>Total de Vendas</p>
                <div className="kpi-trend positive">
                  <i className='bx bx-trending-up'></i>
                  <span>+9.23%</span>
                </div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon downloads">
                <i className='bx bx-shopping-cart'></i>
              </div>
              <div className="kpi-content">
                <h3>938</h3>
                <p>Novos Pedidos</p>
                <div className="kpi-trend negative">
                  <i className='bx bx-trending-down'></i>
                  <span>-1.09%</span>
                </div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon favorites">
                <i className='bx bx-user'></i>
              </div>
              <div className="kpi-content">
                <h3>8.246</h3>
                <p>Novos Usuários</p>
                <div className="kpi-trend positive">
                  <i className='bx bx-trending-up'></i>
                  <span>+16.2%</span>
                </div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon users">
                <i className='bx bx-show'></i>
              </div>
              <div className="kpi-content">
                <h3>29.670</h3>
                <p>Visitantes Únicos</p>
                <div className="kpi-trend positive">
                  <i className='bx bx-trending-up'></i>
                  <span>+11.7%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            <div className="chart-card">
              <div className="chart-header">
                <h3>Emails Enviados</h3>
                <div className="chart-controls">
                  <select>
                    <option>Últimos 6 meses</option>
                    <option>Último ano</option>
                  </select>
                </div>
              </div>
              <div className="chart-content">
                <div className="chart-stats">
                  <div className="stat-item">
                    <span className="stat-value">25,117</span>
                    <span className="stat-label">Marketplace</span>
                    <span className="stat-change negative">-2.2%</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">$34,856</span>
                    <span className="stat-label">Última Semana</span>
                    <span className="stat-change negative">-1.2%</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">$18,225</span>
                    <span className="stat-label">Último Mês</span>
                    <span className="stat-change negative">-1.7%</span>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <i className='bx bx-line-chart'></i>
                  <p>Gráfico de Emails Enviados</p>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <h3>Receita</h3>
                <div className="chart-controls">
                  <select>
                    <option>Este Ano</option>
                    <option>Último Ano</option>
                  </select>
                </div>
              </div>
              <div className="chart-content">
                <div className="chart-stats">
                  <div className="stat-item">
                    <span className="stat-value">17,493</span>
                    <span className="stat-label">Marketplace</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">$44,960</span>
                    <span className="stat-label">Última Semana</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">$29,142</span>
                    <span className="stat-label">Último Mês</span>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <i className='bx bx-bar-chart-alt-2'></i>
                  <p>Gráfico de Receita</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tables Row */}
          <div className="tables-row">
            <div className="table-card">
              <div className="table-header">
                <h3>Transações Recentes</h3>
                <button className="view-all-btn">Ver todas</button>
              </div>
              <div className="table-content">
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Posição</th>
                      <th>Status</th>
                      <th>Idade</th>
                      <th>Data Início</th>
                      <th>Salário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Charles Casey</td>
                      <td>Web Developer</td>
                      <td><span className="status-badge completed">Ativo</span></td>
                      <td>23</td>
                      <td>04 Abr, 2021</td>
                      <td>$42,450</td>
                    </tr>
                    <tr>
                      <td>Alex Adams</td>
                      <td>Python Developer</td>
                      <td><span className="status-badge pending">Inativo</span></td>
                      <td>28</td>
                      <td>12 Mar, 2021</td>
                      <td>$38,200</td>
                    </tr>
                    <tr>
                      <td>Prezy Mark</td>
                      <td>Senior Developer</td>
                      <td><span className="status-badge completed">Ativo</span></td>
                      <td>32</td>
                      <td>15 Fev, 2021</td>
                      <td>$52,300</td>
                    </tr>
                    <tr>
                      <td>Rita Watt</td>
                      <td>UI/UX Designer</td>
                      <td><span className="status-badge in-progress">Pendente</span></td>
                      <td>26</td>
                      <td>20 Jan, 2021</td>
                      <td>$35,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-header">
                <h3>Ganhos Mensais</h3>
                <div className="chart-controls">
                  <select>
                    <option>Abr</option>
                    <option>Mar</option>
                    <option>Fev</option>
                  </select>
                </div>
              </div>
              <div className="stats-content">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className='bx bx-trending-up'></i>
                  </div>
                  <div className="stat-info">
                    <h4>3.475</h4>
                    <p>Market Place</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className='bx bx-time'></i>
                  </div>
                  <div className="stat-info">
                    <h4>458</h4>
                    <p>Última Semana</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className='bx bx-star'></i>
                  </div>
                  <div className="stat-info">
                    <h4>9.062</h4>
                    <p>Último Mês</p>
                  </div>
                </div>
                <div className="chart-placeholder-small">
                  <i className='bx bx-pie-chart'></i>
                  <p>Gráfico de Ganhos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}