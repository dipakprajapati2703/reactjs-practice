import React, { useState, useMemo, useCallback } from 'react';

/**
 * useMemo Hook Examples
 * 
 * This component demonstrates the core concepts of useMemo:
 * 1. Memoizing expensive calculations
 * 2. Preventing unnecessary recalculations
 * 3. Referential stability for objects and arrays
 * 4. Performance measurement and optimization
 */

// Simulate an expensive calculation
const expensiveCalculation = (items, filter, sortBy) => {
  console.log('🔄 Performing expensive calculation...');
  
  // Simulate heavy computation with artificial delay
  const start = performance.now();
  
  // Artificial delay to simulate expensive operation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.random();
  }
  
  // Filter and sort the items
  let processedItems = [...items];
  
  if (filter) {
    processedItems = processedItems.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.description.toLowerCase().includes(filter.toLowerCase())
    );
  }
  
  if (sortBy) {
    processedItems.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }
  
  const end = performance.now();
  const duration = end - start;
  
  console.log(`⏱️ Calculation completed in ${duration.toFixed(2)}ms`);
  
  return {
    items: processedItems,
    totalItems: processedItems.length,
    totalValue: processedItems.reduce((sum, item) => sum + item.price, 0),
    averageRating: processedItems.length > 0 
      ? processedItems.reduce((sum, item) => sum + item.rating, 0) / processedItems.length 
      : 0,
    duration
  };
};

// Simulate another expensive operation
const generateReport = (data, format) => {
  console.log('📊 Generating report...');
  
  const start = performance.now();
  
  // Simulate report generation
  let result = 0;
  for (let i = 0; i < 500000; i++) {
    result += Math.random();
  }
  
  const report = {
    timestamp: new Date().toISOString(),
    format,
    summary: {
      totalItems: data.totalItems,
      totalValue: data.totalValue,
      averageRating: data.averageRating
    },
    recommendations: data.items
      .filter(item => item.rating > 4)
      .slice(0, 3)
      .map(item => ({
        name: item.name,
        reason: `High rating: ${item.rating}/5`
      }))
  };
  
  const end = performance.now();
  const duration = end - start;
  
  console.log(`📊 Report generated in ${duration.toFixed(2)}ms`);
  
  return { report, duration };
};

const useMemoExample = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 1200, rating: 4.5 },
    { id: 2, name: 'Mouse', description: 'Wireless gaming mouse', price: 80, rating: 4.2 },
    { id: 3, name: 'Keyboard', description: 'Mechanical keyboard', price: 150, rating: 4.8 },
    { id: 4, name: 'Monitor', description: '4K gaming monitor', price: 400, rating: 4.6 },
    { id: 5, name: 'Headphones', description: 'Noise-cancelling headphones', price: 200, rating: 4.3 },
    { id: 6, name: 'Webcam', description: 'HD streaming webcam', price: 100, rating: 4.1 },
    { id: 7, name: 'Microphone', description: 'Professional microphone', price: 120, rating: 4.4 },
    { id: 8, name: 'Speaker', description: 'Bluetooth speaker', price: 80, rating: 4.0 },
    { id: 9, name: 'Tablet', description: '10-inch tablet', price: 300, rating: 4.7 },
    { id: 10, name: 'Phone', description: 'Smartphone', price: 800, rating: 4.9 }
  ]);
  
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [reportFormat, setReportFormat] = useState('summary');
  const [renderCount, setRenderCount] = useState(0);
  const [showPerformance, setShowPerformance] = useState(false);

  // Memoized expensive calculation - only recalculates when dependencies change
  const processedData = useMemo(() => {
    return expensiveCalculation(items, filter, sortBy);
  }, [items, filter, sortBy]); // Dependencies: recalculate when these change

  // Memoized report generation - only regenerates when data or format changes
  const reportData = useMemo(() => {
    return generateReport(processedData, reportFormat);
  }, [processedData, reportFormat]);

  // Memoized derived values that don't need recalculation
  const expensiveStats = useMemo(() => {
    return {
      topRated: items.filter(item => item.rating >= 4.5),
      budgetFriendly: items.filter(item => item.price <= 100),
      premium: items.filter(item => item.price >= 500)
    };
  }, [items]);

  // Memoized object for stable reference
  const stableConfig = useMemo(() => ({
    maxItems: 10,
    defaultSort: 'name',
    enableFiltering: true,
    enableSorting: true
  }), []); // Empty dependency array = never changes

  // Memoized array for stable reference
  const stableCategories = useMemo(() => [
    'Electronics',
    'Gaming',
    'Office',
    'Audio',
    'Video'
  ], []); // Empty dependency array = never changes

  // Force re-render to demonstrate memoization
  const forceRender = useCallback(() => {
    setRenderCount(prev => prev + 1);
  }, []);

  // Add new item to demonstrate dependency changes
  const addItem = useCallback(() => {
    const newItem = {
      id: Date.now(),
      name: `Item ${items.length + 1}`,
      description: `Description for item ${items.length + 1}`,
      price: Math.floor(Math.random() * 1000) + 50,
      rating: (Math.random() * 2 + 3).toFixed(1) // Random rating between 3.0 and 5.0
    };
    setItems(prev => [...prev, newItem]);
  }, [items.length]);

  // Remove item to demonstrate dependency changes
  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div className="hooks-example">
      <h2>⚡ useMemo Hook Examples</h2>
      
      <div className="example-section">
        <h3>🎯 What is useMemo?</h3>
        <p>useMemo memoizes the result of a calculation, only recalculating when dependencies change. This prevents expensive operations from running on every render.</p>
        
        <div className="memo-benefits">
          <h4>✅ Benefits of useMemo</h4>
          <ul>
            <li>⚡ <strong>Performance</strong> - Skip expensive calculations when inputs haven't changed</li>
            <li>🔄 <strong>Referential Stability</strong> - Objects and arrays maintain the same reference</li>
            <li>🧠 <strong>Memory Efficiency</strong> - Avoid recreating complex data structures</li>
            <li>📊 <strong>Measurable Impact</strong> - Easy to see performance improvements</li>
          </ul>
        </div>
      </div>

      <div className="example-section">
        <h3>📊 Expensive Calculation Demo</h3>
        <p>This example shows how useMemo prevents unnecessary recalculations:</p>
        
        <div className="calculation-controls">
          <div className="control-group">
            <label>🔍 Filter Items:</label>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter by name or description"
              className="demo-input"
            />
          </div>
          
          <div className="control-group">
            <label>📋 Sort By:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="demo-select"
            >
              <option value="">No sorting</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          
          <div className="control-group">
            <label>📊 Report Format:</label>
            <select 
              value={reportFormat} 
              onChange={(e) => setReportFormat(e.target.value)}
              className="demo-select"
            >
              <option value="summary">Summary</option>
              <option value="detailed">Detailed</option>
              <option value="analytics">Analytics</option>
            </select>
          </div>
        </div>

        <div className="performance-display">
          <h4>⏱️ Performance Metrics</h4>
          <div className="metrics-grid">
            <div className="metric">
              <strong>Calculation Time:</strong> {processedData.duration.toFixed(2)}ms
            </div>
            <div className="metric">
              <strong>Report Generation:</strong> {reportData.duration.toFixed(2)}ms
            </div>
            <div className="metric">
              <strong>Total Items:</strong> {processedData.totalItems}
            </div>
            <div className="metric">
              <strong>Total Value:</strong> ${processedData.totalValue}
            </div>
            <div className="metric">
              <strong>Average Rating:</strong> {processedData.averageRating.toFixed(1)}/5
            </div>
            <div className="metric">
              <strong>Render Count:</strong> {renderCount}
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🔄 Referential Stability Demo</h3>
        <p>useMemo ensures objects and arrays maintain the same reference when dependencies haven't changed:</p>
        
        <div className="stability-demo">
          <div className="stability-item">
            <h4>📋 Stable Config Object</h4>
            <p>Reference changes: <strong>{stableConfig.maxItems}</strong></p>
            <p>This object maintains the same reference across renders</p>
            <pre className="code-preview">
              {`const stableConfig = useMemo(() => ({
  maxItems: 10,
  defaultSort: 'name',
  enableFiltering: true,
  enableSorting: true
}), []); // Never changes`}
            </pre>
          </div>
          
          <div className="stability-item">
            <h4>📂 Stable Categories Array</h4>
            <p>Categories: <strong>{stableCategories.join(', ')}</strong></p>
            <p>This array maintains the same reference across renders</p>
            <pre className="code-preview">
              {`const stableCategories = useMemo(() => [
  'Electronics', 'Gaming', 'Office', 'Audio', 'Video'
], []); // Never changes`}
            </pre>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>📈 Derived Values Demo</h3>
        <p>useMemo can cache derived values that depend on other state:</p>
        
        <div className="derived-values">
          <div className="derived-category">
            <h4>⭐ Top Rated Items (≥4.5 stars)</h4>
            <div className="items-list">
              {expensiveStats.topRated.map(item => (
                <div key={item.id} className="item-card">
                  <strong>{item.name}</strong> - ${item.price} ({item.rating}/5)
                </div>
              ))}
            </div>
          </div>
          
          <div className="derived-category">
            <h4>💰 Budget Friendly (≤$100)</h4>
            <div className="items-list">
              {expensiveStats.budgetFriendly.map(item => (
                <div key={item.id} className="item-card">
                  <strong>{item.name}</strong> - ${item.price} ({item.rating}/5)
                </div>
              ))}
            </div>
          </div>
          
          <div className="derived-category">
            <h4>💎 Premium Items (≥$500)</h4>
            <div className="items-list">
              {expensiveStats.premium.map(item => (
                <div key={item.id} className="item-card">
                  <strong>{item.name}</strong> - ${item.price} ({item.rating}/5)
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🔧 Interactive Controls</h3>
        <p>Test how different actions affect memoization:</p>
        
        <div className="interactive-controls">
          <button onClick={forceRender} className="control-btn">
            🔄 Force Re-render (No Dependencies Change)
          </button>
          <p>This will increment render count but won't recalculate memoized values</p>
          
          <button onClick={addItem} className="control-btn">
            ➕ Add New Item (Changes Dependencies)
          </button>
          <p>This will trigger recalculation of memoized values</p>
          
          <button onClick={() => setItems([])} className="control-btn">
            🗑️ Clear All Items (Changes Dependencies)
          </button>
          <p>This will trigger recalculation of memoized values</p>
        </div>
      </div>

      <div className="example-section">
        <h3>📊 Report Display</h3>
        <p>Generated report based on current data:</p>
        
        <div className="report-display">
          <h4>📋 {reportFormat.charAt(0).toUpperCase() + reportFormat.slice(1)} Report</h4>
          <div className="report-content">
            <p><strong>Generated:</strong> {reportData.report.timestamp}</p>
            <p><strong>Format:</strong> {reportData.report.format}</p>
            <p><strong>Total Items:</strong> {reportData.report.summary.totalItems}</p>
            <p><strong>Total Value:</strong> ${reportData.report.summary.totalValue}</p>
            <p><strong>Average Rating:</strong> {reportData.report.summary.averageRating.toFixed(1)}/5</p>
            
            {reportData.report.recommendations.length > 0 && (
              <div className="recommendations">
                <h5>🌟 Top Recommendations</h5>
                {reportData.report.recommendations.map((rec, index) => (
                  <div key={index} className="recommendation">
                    <strong>{rec.name}</strong> - {rec.reason}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🎯 Key Takeaways</h3>
        <div className="key-points">
          <div className="point">
            <h4>📌 When to Use useMemo</h4>
            <ul>
              <li>⚡ Expensive calculations that depend on specific values</li>
              <li>🔄 Objects/arrays that need stable references</li>
              <li>📊 Derived values that are computed from other state</li>
              <li>🎯 Performance optimization after measuring bottlenecks</li>
            </ul>
          </div>
          
          <div className="point">
            <h4>⚠️ useMemo Best Practices</h4>
            <ul>
              <li>Measure performance first - don't optimize prematurely</li>
              <li>Include all dependencies in the dependency array</li>
              <li>Use for expensive operations, not simple calculations</li>
              <li>Consider the cost of creating the dependency array</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="example-section">
        <h3>🔍 Performance Monitoring</h3>
        <div className="performance-tips">
          <h4>💡 How to Monitor Performance</h4>
          <ul>
            <li>✅ Open browser console to see calculation timing logs</li>
            <li>✅ Watch render count vs. calculation count</li>
            <li>✅ Use React DevTools Profiler to measure render times</li>
            <li>✅ Compare with/without useMemo to see the difference</li>
          </ul>
        </div>
      </div>

      <div className="console-note">
        <p>💡 <strong>Open your browser console</strong> to see when calculations run and their timing!</p>
        <p>Try changing filters, sorting, and adding items to see how useMemo prevents unnecessary recalculations.</p>
      </div>
    </div>
  );
};

export default useMemoExample;
