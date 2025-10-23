import { useEffect, useState } from 'react';
import { api } from '../api/client';

function GoalRow({ goal, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <input style={{ flex: 1 }} value={goal.goal} onChange={(e) => onChange({ ...goal, goal: e.target.value })} />
      <input type="number" style={{ width: 120 }} value={goal.progress ?? 0} onChange={(e) => onChange({ ...goal, progress: Number(e.target.value) })} />
    </div>
  );
}

export default function Goals() {
  const [goals, setGoals] = useState([{ goal: 'Walk 10,000 steps daily', progress: 0 }]);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api.getGoals().then((data) => setGoals(data.goals || [])).catch((e) => setError(e.message));
  }, []);

  const handleUpdate = (idx, next) => {
    setGoals((prev) => prev.map((g, i) => (i === idx ? next : g)));
  };
  const addRow = () => setGoals((prev) => [...prev, { goal: '', progress: 0 }]);

  const doSet = async () => {
    setMsg(''); setError('');
    try { await api.setGoals(goals); setMsg('Fitness goals set successfully'); } catch (e) { setError(e.message); }
  };
  const doUpdate = async () => {
    setMsg(''); setError('');
    try { await api.updateGoals(goals); setMsg('Fitness goals updated successfully'); } catch (e) { setError(e.message); }
  };
  const doDelete = async () => {
    setMsg(''); setError('');
    try { await api.deleteGoals(); setGoals([]); setMsg('Fitness goals deleted successfully'); } catch (e) { setError(e.message); }
  };

  return (
    <div>
      <h2>Fitness Goals</h2>
      {goals.map((g, idx) => (
        <GoalRow key={idx} goal={g} onChange={(next) => handleUpdate(idx, next)} />
      ))}
      <button onClick={addRow}>Add Goal</button>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button onClick={doSet}>Set Goals</button>
        <button onClick={doUpdate}>Update Goals</button>
        <button onClick={doDelete}>Delete Goals</button>
      </div>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
      {error && <p style={{ color: 'tomato' }}>{error}</p>}
    </div>
  );
}
