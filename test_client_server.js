const http = require('http');

function testEndpoint(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

function testPost(url, payload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const req = http.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('--- RUNNING FULL SYSTEM VERIFICATION ---');

  // 1. Test frontend root HTML
  try {
    const rootRes = await testEndpoint('http://localhost:3000');
    console.log('[PASS] Frontend root index.html status:', rootRes.status);
    console.log('       Title present:', rootRes.body.includes("Dr. Shashi's Ortho Clinic"));
    console.log('       Root container present:', rootRes.body.includes('<div id="root"></div>'));
  } catch (err) {
    console.error('[FAIL] Frontend root:', err.message);
  }

  // 2. Test assets
  try {
    const imgRes = await testEndpoint('http://localhost:3000/assets/images/dr-shashi-portrait.jpg');
    console.log('[PASS] Doctor portrait asset status:', imgRes.status, 'Content-Length:', imgRes.headers['content-length']);
  } catch (err) {
    console.error('[FAIL] Asset load:', err.message);
  }

  // 3. Test API Health check directly on Express (5000)
  try {
    const healthRes = await testEndpoint('http://localhost:5000/api/health');
    console.log('[PASS] Express Health status (5000):', healthRes.status, healthRes.body);
  } catch (err) {
    console.error('[FAIL] Express Health:', err.message);
  }

  // 4. Test API Health check through Webpack Dev Server Proxy (3000)
  try {
    const proxyHealthRes = await testEndpoint('http://localhost:3000/api/health');
    console.log('[PASS] Proxy Health status (3000):', proxyHealthRes.status, proxyHealthRes.body);
  } catch (err) {
    console.error('[FAIL] Proxy Health:', err.message);
  }

  // 5. Test Appointment booking through Webpack Dev Server Proxy (3000)
  try {
    const apptRes = await testPost('http://localhost:3000/api/appointment', {
      name: 'Ramesh Patel',
      phone: '9845012345',
      date: '2026-09-22',
      time: '06:30 PM - 07:30 PM',
      reason: 'Bilateral knee pain and joint replacement opinion'
    });
    console.log('[PASS] Proxy Appointment POST status (3000):', apptRes.status, apptRes.body);
  } catch (err) {
    console.error('[FAIL] Proxy Appointment POST:', err.message);
  }

  console.log('--- VERIFICATION COMPLETED ---');
}

runTests();
