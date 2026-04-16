import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, ChartModule],
  template: `
    <div class="layout">

      <!-- Sidebar -->
      <div class="sidebar">
        <h2>Dev<span class="highlight">Analytics</span></h2>

        <ul>
          <li><i class="pi pi-chart-line"></i> Analytics</li>
          <li><i class="pi pi-bolt"></i> Activity</li>
          <li><i class="pi pi-cog"></i> Settings</li>
        </ul>
      </div>

      <!-- Main -->
      <div class="main">

        <h2>Dashboard Overview</h2>

        <!-- Stats -->
        <div class="cards">
          <p-card class="card-dark">
            <h3>Users</h3>
            <h1>1,245</h1>
          </p-card>

          <p-card class="card-dark">
            <h3>Sessions</h3>
            <h1>3,876</h1>
          </p-card>

          <p-card class="card-dark">
            <h3>Revenue</h3>
            <h1>R45,000</h1>
          </p-card>
        </div>

        <!-- Charts -->
        <div class="charts">

          <p-card header="User Growth" class="card-dark">
            <p-chart type="line" [data]="chartData"></p-chart>
          </p-card>

          <p-card header="Traffic Source" class="card-dark">
            <p-chart type="pie" [data]="pieData"></p-chart>
          </p-card>

        </div>

        <!-- Activity Feed -->
        <p-card header="Recent Activity" class="card-dark">
          <ul class="activity">
            <li>✔ New user registered</li>
            <li>✔ Payment received</li>
            <li>✔ Server deployed</li>
            <li>✔ Job posted</li>
          </ul>
        </p-card>

      </div>
    </div>
  `,
  styles: [`
    .layout { display: flex; height: 100vh; }

    .sidebar {
      width: 240px;
      background: #020617;
      padding: 20px;
      color: white;
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar li {
      padding: 10px;
      color: #94a3b8;
      cursor: pointer;
    }

    .sidebar li:hover {
      color: #38bdf8;
    }

    .main {
      flex: 1;
      padding: 20px;
      background: #0f172a;
      color: white;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 20px;
    }

    .charts {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .card-dark {
      background: #1e293b;
      border-radius: 10px;
      padding: 10px;
    }

    h1 { color: #38bdf8; }

    .activity li {
      padding: 8px 0;
      border-bottom: 1px solid #334155;
    }
  `]
})
export class App {

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Users',
        data: [200, 400, 600, 800, 1200]
      }
    ]
  };

  pieData = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        data: [300, 200, 100]
      }
    ]
  };

}